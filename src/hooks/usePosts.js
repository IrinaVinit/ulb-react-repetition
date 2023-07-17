import { useMemo, useState } from "react";
// кастомные пользовательские хуки - это хуки, которые внутри себя испльзуют стандартные реакт-хуки

export const useSortedPosts = (posts, sort) => {
      // отсортированные посты
  const sortedPosts = useMemo(() => {
    console.log("Отработала");
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }

    return posts;
  }, [sort, posts])
  return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) =>
          post[sort]?.toLowerCase().includes(query.toLowerCase())
        );
      }, [query, sortedPosts]);
    console.log(posts);
    console.log(sortedAndSearchedPosts);
    return sortedAndSearchedPosts;
}