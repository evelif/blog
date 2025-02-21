import apiClient from './index';

export const fetchPosts = async (page?:number) => {
  if(!page){
    const response = await apiClient.get('/posts?page=1');
    return response.data;
  }else{
      const response = await apiClient.get('/posts?page='+page);
      return response.data;
  }
};

export const fetchPostsByTag = async (tag: string) => {
  const response = await apiClient.get(`posts_by_tag?tag=${tag}`);
  return response.data;
};

export const fetchPostById = async (id: number) => {
  const response = await apiClient.get(`/post/${id}`);
  return response.data;
};

export const fetchPostsByCategory = async (category: string) => {
  const response = await apiClient.get(`posts_by_category?category=${category}`);
  return response.data;
};