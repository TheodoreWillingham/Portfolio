import EditItem from "@/app/components/EditItem";

type Params = Promise<{ id: string }>;

export default async function EditItemPage({ params }: { params: Params }) {
  const { id } = await params;
  return <EditItem id={id} />;
}