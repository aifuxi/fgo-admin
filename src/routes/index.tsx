import { createFileRoute } from "@tanstack/react-router";
import { getUserInfo } from "../api/user";
import { useRequest } from "ahooks";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { data, loading } = useRequest(getUserInfo);

  return (
    <div className="p-2">
      {loading ? (
        <h1 className="text-3xl font-bold underline">Loading...</h1>
      ) : (
        <h1 className="text-3xl font-bold underline">
          Hello world! {data?.data.nickname}
        </h1>
      )}
    </div>
  );
}
