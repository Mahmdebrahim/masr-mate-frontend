import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../shared/services/api"; 

// ====================== GET Request ======================
export const useFetch = (queryKey, url, options = {}) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const { data } = await axiosInstance.get(url);
      return data;
    },
    retry: 2,
    staleTime: 5 * 60 * 1000, 
    ...options,
  });
};

// ====================== POST / PUT / DELETE ======================
export const useMutate = (options = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ method = "post", url, data = {} }) => {
      const response = await axiosInstance[method](url, data);
      return response;
    },

    onSuccess: (response, variables) => {
      //  علشان لو عايز تحدث أي Query تلقائياً بعد النجاح
      if (variables.invalidate) {
        variables.invalidate.forEach((key) => {
          queryClient.invalidateQueries({ queryKey: key });
        });
      }

      options.onSuccess?.(response, variables);
    },

    onError: (error) => {
      console.error("API Error:", error.response?.data || error.message);
      options.onError?.(error);
    },
  });
};
