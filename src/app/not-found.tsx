import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-8xl mb-4">🌍</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn't find the eSIM plans you're looking for.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
          >
            🏠 Back to Home
          </Link>
          
          <div className="mt-6">
            <p className="text-sm text-gray-500 mb-4">
              Looking for a specific country? Try these popular destinations:
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link href="/esim/turkey" className="text-blue-600 hover:text-blue-800 hover:underline">
                🇹🇷 Turkey
              </Link>
              <Link href="/esim/germany" className="text-blue-600 hover:text-blue-800 hover:underline">
                🇩🇪 Germany
              </Link>
              <Link href="/esim/france" className="text-blue-600 hover:text-blue-800 hover:underline">
                🇫🇷 France
              </Link>
              <Link href="/esim/spain" className="text-blue-600 hover:text-blue-800 hover:underline">
                🇪🇸 Spain
              </Link>
              <Link href="/esim/italy" className="text-blue-600 hover:text-blue-800 hover:underline">
                🇮🇹 Italy
              </Link>
              <Link href="/esim/japan" className="text-blue-600 hover:text-blue-800 hover:underline">
                🇯🇵 Japan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 