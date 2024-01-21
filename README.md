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
- Chapter 8 - 9
- Static Rendering and Dynamic Rendering
- Next.js API unstable_noStore: an experimental API
- How to settle a slow data fetch
- Improve user's experience by adding streaming.
- Loading skeletons
- Route Groups (overview)
- Stream specific components using React Suspense.
- it's good practice to move your data fetches down to the components that need it, and then wrap those components in Suspense. 

### Partial Prerendering(Next.js 14)
- Chapter 10
- Partial Prerendering leverages React's Concurrent APIs and uses Suspense to defer rendering parts of your application until some condition is met (e.g. data is loaded).

### Search and Pagination
- Chapter 11
- Use the Next.js APIs: searchParams, usePathname, and useRouter.
- Client Component and Server Component
- Best practice: Debouncing  use a library called use-debounce

- Adding pagination
- learn pagination component(pagination.tsx)

## 2024/1/21
- Chapter 12: Mutating Data
- Server Actions: run asynchronous code directly on the server.
- Learn breadcrumbs style (breadcrumbs.tsx)
- Create invoices with server actions

- Dynamic Route Segments with []: you don't know the exact segment name and want to create routes based on data.
- Edit invoices and Delete invoices with server actions.
- Pass id to the Server Action using JS bind. This will ensure that any values passed to the Server Action are encoded.

- Chapter 13: handling errors
- Learn how to handle errors
- Use error.tsx file to catch errors in route segments,and show a fallback UI to the user.
- error.tsx is useful for catching all errors, notFound can be used when you try to fetch a resource that doesn't exist.

- Chapter 14: Improving Accessibility
- Form Validation: client-side validation & server-side validation
- [] server-side validation: learn twice