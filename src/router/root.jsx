import { Outlet } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";
import TopNav from "../components/layout/TopNav";
// import Banner from "../components/layout/Banner";

// Type for the data returned by loader could be specified if it was not returning null
export async function loader() {
  // const contacts = await getContacts();
  // return { contacts };
  return null;
}

const Root = () => {
  return (
    <>
      <CssBaseline />
      <TopNav />
      <Container maxWidth="lg" sx={{ pb: 2, pt: 1 }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Root;
