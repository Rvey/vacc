import { useMutation , useQueryClient } from "react-query";
import axios from "axios";

export function useDeletePosts(id) {
    // like this?
    const queryClient = useQueryClient();
    return useMutation(
        (id) => {
            return axios.delete(`http://localhost:4000/api/urbanCenter/${id}`);
        },
        {
            onSuccess: () => {
                // ✅ refetch the comments list for our blog post
                queryClient.invalidateQueries(['urbanCenter'])
            },
        }
    );
    // console.log(id);
}