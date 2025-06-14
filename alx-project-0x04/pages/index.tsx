import Button from "@/components/common/Button";
import { PageRouteProps } from "@/interface";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  // imperative routing with useRouter
  const routeToNextPage = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute, undefined, {
      shallow: false,
    });
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col text-center justify-center items-center">
      {/* welcome message */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Splash App
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        Your one-stop platform for everything AI you need. Start exploring by
        navigating to our features below
      </p>

      {/* navigation options */}
      <div className="flex gap-6">
        <Button
          buttonLabel="Generate Text"
          buttonBackgroundColor="blue"
          action={() => routeToNextPage({ pageRoute: "/generate-text-ai" })}
        />
        <Button
          buttonLabel="Text to Image"
          buttonBackgroundColor="green"
          action={() => routeToNextPage({ pageRoute: "/text-to-image" })}
        />
        <Button
          buttonLabel="Contact Us"
          buttonBackgroundColor="orange"
          action={() => routeToNextPage({ pageRoute: "/counter-app" })}
        />
      </div>
    </div>
  );
}
