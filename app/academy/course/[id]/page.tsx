import CourseDetail from '@/components/CourseDetail'

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  return <CourseDetail courseId={params.id} />
}

