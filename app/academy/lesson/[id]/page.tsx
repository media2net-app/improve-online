import LessonDetail from '@/components/LessonDetail'

export default function LessonDetailPage({ params }: { params: { id: string } }) {
  return <LessonDetail lessonId={params.id} />
}

