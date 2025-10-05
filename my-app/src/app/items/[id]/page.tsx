import SpecificItemWrapper from "@/app/components/specificItemsWrapper";

type Params = Promise<{ id: string }>;

export default async function ItemDetailPage({ params }: { params: Params }) {
  const { id } = await params;

  return (
    <div>
      <SpecificItemWrapper id={id} />
    </div>
  );
}
