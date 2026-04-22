import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getAdminAuth } from "@/lib/firebase-admin";
import { getSql, initDb } from "@/lib/db";
import type { Metadata } from "next";
import LogoutButton from "./LogoutButton";

export const metadata: Metadata = {
  title: "Admin — Enrollments | RobotixAcademy",
};

export const dynamic = "force-dynamic";

const SESSION_COOKIE = "ra_admin_session";

type Enrollment = {
  id: number;
  parent_name: string;
  child_name: string;
  age: number;
  email: string;
  phone: string;
  program: string;
  message: string | null;
  created_at: string;
};

async function getAdminUser() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE);
  if (!session?.value) redirect("/admin/login");

  try {
    const decoded = await getAdminAuth().verifySessionCookie(session.value, true);
    return { email: decoded.email ?? "Admin", name: decoded.name ?? "Admin" };
  } catch {
    redirect("/admin/login");
  }
}

async function getEnrollments(): Promise<Enrollment[]> {
  await initDb();
  const rows = await getSql()`
    SELECT id, parent_name, child_name, age, email, phone, program, message, created_at
    FROM enrollments
    ORDER BY created_at DESC
  `;
  return rows as Enrollment[];
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

const programColor: Record<string, string> = {
  "Little Explorers (6–9 yrs)": "bg-green-100 text-green-700",
  "Tech Builders (10–13 yrs)": "bg-purple-100 text-brand-purple",
  "Future Innovators (14–16 yrs)": "bg-orange-100 text-brand-orange",
  "Holiday Camp": "bg-yellow-100 text-yellow-700",
  "Not Sure — Please Suggest": "bg-gray-100 text-gray-600",
};

export default async function AdminPage() {
  const user = await getAdminUser();
  const enrollments = await getEnrollments();

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Header */}
      <div className="bg-brand-navy text-white px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🤖</span>
          <div>
            <div className="font-black text-lg">RobotixAcademy</div>
            <div className="text-gray-400 text-xs">Admin Dashboard</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-bold">{user.name}</div>
            <div className="text-gray-400 text-xs">{user.email}</div>
          </div>
          <LogoutButton />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            {
              label: "Total Enrollments",
              value: enrollments.length,
              icon: "📋",
              color: "bg-brand-purple-light text-brand-purple",
            },
            {
              label: "This Month",
              value: enrollments.filter((e) => {
                const d = new Date(e.created_at);
                const now = new Date();
                return (
                  d.getMonth() === now.getMonth() &&
                  d.getFullYear() === now.getFullYear()
                );
              }).length,
              icon: "📅",
              color: "bg-orange-50 text-brand-orange",
            },
            {
              label: "Unique Programs",
              value: new Set(enrollments.map((e) => e.program)).size,
              icon: "🎓",
              color: "bg-teal-50 text-brand-teal",
            },
            {
              label: "Avg Age",
              value:
                enrollments.length > 0
                  ? Math.round(
                      enrollments.reduce((s, e) => s + e.age, 0) /
                        enrollments.length
                    )
                  : "—",
              icon: "👧",
              color: "bg-yellow-50 text-yellow-600",
            },
          ].map((s) => (
            <div
              key={s.label}
              className={`${s.color} rounded-2xl p-5 flex items-center gap-4`}
            >
              <span className="text-3xl">{s.icon}</span>
              <div>
                <div className="text-2xl font-black">{s.value}</div>
                <div className="text-xs font-medium opacity-70">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-xl font-black text-brand-navy">
              Enrollment Requests
            </h2>
            <span className="text-sm text-gray-400">
              {enrollments.length} total · refreshes on load
            </span>
          </div>

          {enrollments.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <div className="text-6xl mb-4">📭</div>
              <p className="font-bold text-lg">No enrollments yet</p>
              <p className="text-sm mt-1">
                Submit the enrollment form to see entries here.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left text-xs font-black text-gray-500 uppercase tracking-wider">
                    <th className="px-6 py-4">#</th>
                    <th className="px-6 py-4">Child</th>
                    <th className="px-6 py-4">Parent</th>
                    <th className="px-6 py-4">Contact</th>
                    <th className="px-6 py-4">Program</th>
                    <th className="px-6 py-4">Age</th>
                    <th className="px-6 py-4">Message</th>
                    <th className="px-6 py-4">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {enrollments.map((e) => (
                    <tr
                      key={e.id}
                      className="hover:bg-brand-bg transition-colors"
                    >
                      <td className="px-6 py-4 font-bold text-gray-400">
                        #{e.id}
                      </td>
                      <td className="px-6 py-4 font-bold text-brand-navy">
                        {e.child_name}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {e.parent_name}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-brand-purple">{e.email}</div>
                        <div className="text-gray-500 text-xs">{e.phone}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                            programColor[e.program] ??
                            "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {e.program}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-bold text-brand-navy">
                        {e.age} yrs
                      </td>
                      <td className="px-6 py-4 text-gray-500 max-w-xs truncate">
                        {e.message || (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-gray-400 text-xs whitespace-nowrap">
                        {formatDate(e.created_at)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
