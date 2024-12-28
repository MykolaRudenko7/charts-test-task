import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex h-screen flex-col items-center justify-center bg-gray-50 px-4'>
      <h2 className='mb-4 text-3xl font-bold text-gray-800 sm:text-4xl'>
        Not Found
      </h2>
      <p className='mb-8 text-lg text-gray-600 sm:text-xl'>
        Could not find the requested resource.
      </p>
      <Link
        href='/'
        className='rounded bg-blue-600 px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
      >
        Return Home
      </Link>
    </div>
  );
}
