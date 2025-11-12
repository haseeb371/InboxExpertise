import OrbitingItems from "@/components/animata/list/orbiting-items";

const TestPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Simple test div to verify animation works */}
      <div className="p-8">
        <div className="w-20 h-20 bg-red-500 animate-orbit-swing">
          Test
        </div>
      </div>

      <OrbitingItems pauseOnHover={false} />
    </div>
  );
};

export default TestPage;
