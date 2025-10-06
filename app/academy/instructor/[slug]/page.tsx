import InstructorDetail from '@/components/InstructorDetail'

export default function InstructorDetailPage({ params }: { params: { slug: string } }) {
  return <InstructorDetail instructorSlug={params.slug} />
}
