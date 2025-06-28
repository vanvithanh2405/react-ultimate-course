import React from "react";

interface TableProps {
  path: string,
  page?: number,
  limit?: number
}

export const useTable = ({ path, page = 1, limit = 3 }: TableProps) => {
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
    setPagination(prevState => ({
      ...prevState,
      page: prevState.page - 1
    }))
  }

  function onChangeNextPage() {
    setPagination(prevState => ({
      ...prevState,
      page: prevState.page + 1
    }))
  }

  function onChangeLimit(limit: number) {
    setPagination(prevState => ({
      ...prevState,
      limit
    }))
  }

  return {
    dataSource,
    pagination,
    onChangePrevPage,
    onChangeNextPage,
    onChangeLimit
  }
}