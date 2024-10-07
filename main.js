const useGetUser = (userId: string, applicationDate: Date) => useQuery({
  queryFn: () => {
      return db.users.get({ where: ({ id, date }) => userId === id && date <= applicationDate });
  },
  queryKey: ["getuser"]
});

const {isLoading, data, isSuccess, error} = useGetUser();
