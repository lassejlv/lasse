import PageAnimation from "../components/Animation";

export default function NotFound() {
  return (
    <PageAnimation>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-white">404 | Not Found</h1>
        <p className="text-gray-400 text-center mt-2">
          The page you are looking for does not exist.
        </p>
      </div>
    </PageAnimation>
  );
}
