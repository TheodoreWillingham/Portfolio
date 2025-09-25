import EditItem from "@/app/components/EditItem";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function EditItemPage({ params }: any) {
  const { id } = await params; // ✅ params is async in Next.js 15
  return <EditItem id={id} />;
}
