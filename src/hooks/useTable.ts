import React from "react";
import { useNavigate } from "react-router";

interface TableProps {
  path: string,
  page?: number | undefined,
  limit?: number | undefined,
}

export const useTable = ({ path, page = 1, limit = 3 }: TableProps) => {
  const navigate = useNavigate();
  const [dataSource, setDataSource] = React.useState<any>([]);
  const [pagination, setPagination] = React.useState({
    page,
    limit
  })

  React.useEffect(() => {
    async function fetchDataSource() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${path}?_page=${pagination.page}&_limit=${pagination.limit}`);
        const data = await response.json();
        setDataSource(data)
      } catch (e) {
        console.log('Fail fetch data')
      }
    }
    fetchDataSource();
  }, [pagination]);
  
  function onChangePrevPage() {
    setPagination(prevState => {
      const newPage = prevState.page - 1;
      navigate(`/leaderboard?page=${newPage}&limit=${prevState.limit}`, {
        replace: true
      })
      return {
        ...prevState,
        page: newPage
      }
    })
  }

  function onChangeNextPage() {
    setPagination(prevState => {
      const newPage = prevState.page + 1;
      navigate(`/leaderboard?page=${newPage}&limit=${prevState.limit}`, {
        replace: true
      })
      return {
        ...prevState,
        page: newPage
      }
    })
  }

  function onChangeLimit(limit: number) {
    setPagination(prevState => {
      navigate(`/leaderboard?page=${prevState.page}&limit=${limit}`, {
        replace: true
      })
      return {
        ...prevState,
        limit
      }
    })
  }

  return {
    dataSource,
    pagination,
    onChangePrevPage,
    onChangeNextPage,
    onChangeLimit
  }
}