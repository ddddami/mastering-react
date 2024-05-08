import { useState, useEffect } from "react";
import userService, { User } from "../services/user-service";
import { CanceledError, AxiosError } from "../services/api-client";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userService.getAll<User>();
    request
      .then(({ data }) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { users, isLoading, error, setError, setUsers };
};

export default useUsers;
