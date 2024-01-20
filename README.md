## 2024/1/18:
- chapter 1 - 6
- start to learn next.js app router course 
- set up dashboard database @vercel/postgres

## 2024/1/19
- chapter 7
- learn some approaches to fetch data:APIs,ORMs,SQL etc.
- fetch data for RevenueChart/LatestInvoicesChart/Card
- learn network waterfalls.
- avoid waterfalls: initiate all data requests at the same time - in parallel.
- disadvantage: if one data request is slower than all the others.

### problem
- RevenueChart style have not been settled. [css: grid flex]

## 2024/1/20
- Chapter 8
- Static Rendering and Dynamic Rendering
- Next.js API unstable_noStore: an experimental API
- How to settle a slow data fetch
- Improve user's experience by adding streaming.
- Loading skeletons
- Route Groups (overview)
- Stream specific components using React Suspense.
- it's good practice to move your data fetches down to the components that need it, and then wrap those components in Suspense. 