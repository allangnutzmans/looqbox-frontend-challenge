import Sider from "antd/es/layout/Sider";
import { Flex, Pagination, Layout } from 'antd';
import { Outlet, useParams } from "react-router";
import PerfectScrollbar from 'react-perfect-scrollbar'
import { PokeCardGrid } from "../components/PokeCardGrid";
import { useState, useEffect } from "react";
import { usePrefetch } from "../api/client";
import { PokeSearchBar } from "../components/PokeSearchBar";

const pageSize = 21;
export const PokedexView = () => {
  const { id } = useParams();
  const [page, setPage] = useState(1);

  const prefetchList = usePrefetch('getPokedexList');

  useEffect(() => {
    // Prefetch the next page
    prefetchList({ page: page + 1, pageSize: 21 });
  }, [page, prefetchList]);

  return (
    <Layout>
      <Flex vertical justify="start" style={{ height: "100%" }}>

        <PokeSearchBar />

        <Flex style={{ flex: 1, overflow: "hidden" }} gap="large">

          {/* Pokemons grid */}
          <div style={{ display: "flex", flexDirection: "column", height: "100%", overflow: "hidden", flex: 1 }}>
            <div style={{ flex: 1, overflow: "hidden" }}>
              <PerfectScrollbar style={{ height: "100%" }}>
                <PokeCardGrid page={page} pageSize={pageSize} />
              </PerfectScrollbar>
            </div>
            <Flex justify="center" style={{ padding: "1em 0 2em 0" }}>
              <Pagination
                current={page}
                pageSize={pageSize}
                total={1350}
                onChange={(p) => setPage(p)}
                showSizeChanger={false}
              />
            </Flex>
          </div>

          {/* Pokemon details */}
          {id && (
            <Sider
              style={{
                minWidth: "500px",
                backgroundColor: "transparent",
                height: "100%",
                overflow: "auto",
              }}
              width="32%"
            >
              <Outlet />
            </Sider>
          )}

        </Flex>

      </Flex>
    </Layout>
  );
};