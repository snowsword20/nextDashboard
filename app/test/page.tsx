import { lusitana } from "@/app/ui/fonts";
import { fetchRevenue } from "@/app/lib/data";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";

export default async function Page() {
  const revenue = await fetchRevenue();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Test</h1>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 bg-blue-500">
        <div className="bg-blue-900">
          <h2>第一部分</h2>
        </div>
        <div className="mt-6 bg-red-900">
          <h2>第二部分</h2>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8 bg-blue-600">
          {/* <RevenueChart revenue={revenue}  />
          <RevenueChart revenue={revenue}  />
          <RevenueChart revenue={revenue}  />
          <RevenueChart revenue={revenue}  />
          <RevenueChart revenue={revenue}  /> */}
          {/* <RevenueChart revenue={revenue} /> */}
          <p className="bg-blue-900">标签1</p>
          <p className="bg-green-900 w-full md:col-span-4">标签2</p>
          <p className="bg-red-900">标签3</p>
          <p className="bg-yellow-900">标签4</p>
          <p className="bg-purple-900">标签5</p>
          <p className="bg-purple-900">标签6</p>
          <p className="bg-purple-900">标签7</p>
          <p className="bg-purple-900">标签8</p>
          <p className="bg-purple-900">标签9</p>

          <div className="w-full md:col-span-4">
            <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-purple-900 p-4 md:gap-4">
              <div className="bg-yellow-900"></div>
              <div className="bg-red-900"></div>
              <div className="bg-yellow-900"></div>
              <div className="bg-red-900"></div>
              <div className="bg-yellow-900"></div>
              <div className="bg-red-900"></div>
              <div className="bg-yellow-900"></div>
              <div className="bg-red-900"></div>
              <div className="bg-yellow-900"></div>
              <div className="bg-red-900"></div>
              <div className="bg-yellow-900"></div>
              <div className="bg-red-900"></div>
              <div className="bg-yellow-900"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
