import Sider from "antd/es/layout/Sider";
import { UiSearchBar } from "../components/base/UiSearchBar";
import { Flex, Pagination, Layout } from 'antd';
import { Outlet, useParams } from "react-router";
import PerfectScrollbar from 'react-perfect-scrollbar'
import { PokeCardGrid } from "../components/PokeCardGrid";
import { useState, useEffect } from "react";
import { usePrefetch } from "../api/client";

export const PokedexView = () => {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const pageSize = 21;
  const prefetchList = usePrefetch('getPokedexList');

  useEffect(() => {
    // Prefetch the next page
    prefetchList({ page: page + 1, pageSize });
  }, [page, prefetchList]);

  const searchBarStyle = {
    width: '100%',
    maxWidth: '500px',
  }

  return (
    <Layout>
      <Flex vertical justify="start">
        <div style={{ padding: "1em 0" }}>
          <UiSearchBar style={searchBarStyle} />
        </div>
        <PerfectScrollbar style={{ marginInlineEnd: "1em" }}>
          <div style={{ flex: 1, maxHeight: "calc(100vh - 264px)" }}>
            <PokeCardGrid page={page} pageSize={pageSize} />
          </div>
        </PerfectScrollbar>
        <Flex justify="center" style={{ marginTop: "2em" }}>
          <Pagination
            current={page}
            pageSize={pageSize}
            total={1350}
            onChange={(p) => setPage(p)}
            showSizeChanger={false}
          />
        </Flex>
      </Flex>
      {id && (
        <Sider style={{ minWidth: "400px", backgroundColor: "transparent" }} width="30%">
          <Outlet />
        </Sider>
      )}
    </Layout>
  );
};