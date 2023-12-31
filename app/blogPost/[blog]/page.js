export default function BlogPost({params}) {
  return (
    <div className='p-4 min-h-[527px]'>
      {params.blog}
    </div>
  )
}
