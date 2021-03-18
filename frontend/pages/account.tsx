import { useEffect, useState } from "react";
import Head from "next/head";
import { Header } from "../components/Header/Header";
import { UserState } from "../redux/user/userTypes";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../redux/rootReducer";
import { useRouter } from "next/router";
import PageLoader from "../components/PageLoader/PageLoader";
import { signOut } from "../redux/user/userActions";
import Button from "../components/UI/Button/Button";
import { fetchAllOrders, fetchMoreOrders } from "../redux/order/orderActions";
import {
  Content,
  UserInfoWrapper,
  UserInfo,
  ButtonsWrapper,
  TableWrapper,
  Table,
  MobileDesc,
  Mobile,
} from "../layout/accountLayout";
import Heading from "../components/UI/Heading/Heading";
import { OrderState } from "../redux/order/orderTypes";
import { twoDecimals } from "../utils/format";
import Footer from "../components/Footer/Footer";

enum ActiveTab {
  MY_ORDERS = "myOrders",
  CHANGE_INFO = "changeInfo",
}

const Account = () => {
  const { user }: UserState = useSelector((state: AppState) => state.user);
  const { orders, canFetchMore, loading }: OrderState = useSelector((state: AppState) => state.order);
  const [active, setActive] = useState<ActiveTab>(ActiveTab.MY_ORDERS);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
    if (user) {
      dispatch(fetchAllOrders());
    }
  }, [user]);

  if (!user || !orders) {
    return <PageLoader />;
  }

  //#be6a15

  return (
    <>
      <Head>
        <title>Eternity</title>
        <meta name="description" content="Account page" />
      </Head>
      <Header />
      <Content>
        <UserInfoWrapper>
          <UserInfo>
            <Heading size="h1" margin="0 0.2em 0 0" color="#fff">
              Welcome
            </Heading>
            <Heading size="h1" color="#be6a15">
              {user.name}
            </Heading>
            <p>{user.email}</p>
          </UserInfo>
        </UserInfoWrapper>
        <ButtonsWrapper>
          <div>
            <Button
              bColor={active === ActiveTab.MY_ORDERS ? "#be6a15" : ""}
              onClick={() => setActive(ActiveTab.MY_ORDERS)}
              margin="0 1em 0 0"
            >
              Orders
            </Button>
            <Button
              bColor={active === ActiveTab.CHANGE_INFO ? "#be6a15" : ""}
              onClick={() => setActive(ActiveTab.CHANGE_INFO)}
            >
              Account
            </Button>
          </div>
          <div>
            <Button margin="0 0 0 1em" onClick={() => dispatch(signOut())}>
              Loggout
            </Button>
          </div>
        </ButtonsWrapper>
        {active === ActiveTab.MY_ORDERS && (
          <>
            <TableWrapper>
              <Table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                    <th>DELIVERED</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._id}>
                      <td>
                        <Mobile>
                          <MobileDesc>
                            <strong>ID</strong>
                          </MobileDesc>
                          {order._id}
                        </Mobile>
                      </td>
                      <td>
                        <Mobile>
                          <MobileDesc>
                            <strong>DATE</strong>
                          </MobileDesc>
                          {order.createdAt.substring(0, 10)}
                        </Mobile>
                      </td>
                      <td>
                        <Mobile>
                          <MobileDesc>
                            <strong>TOTAL</strong>
                          </MobileDesc>
                          ${twoDecimals(order.totalPrice)}
                        </Mobile>
                      </td>
                      <td>
                        <Mobile>
                          <MobileDesc>
                            <strong>DELIVERED</strong>
                          </MobileDesc>
                          {order.isDelivered ? order.deliveredAt.substring(0, 10) : "No"}
                        </Mobile>
                      </td>
                      <td>
                        <Mobile>
                          <MobileDesc>
                            <strong>ACTIONS</strong>
                          </MobileDesc>
                          <Button bColor="#be6a15" padding="0.1em 0.9em" margin="0.4rem 0.2rem">
                            Details
                          </Button>
                        </Mobile>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </TableWrapper>
            {canFetchMore && (
              <Button
                bColor={active === ActiveTab.MY_ORDERS ? "#be6a15" : ""}
                onClick={() => dispatch(fetchMoreOrders())}
                disabled={loading || !canFetchMore}
                margin="0 1em 0 0"
              >
                More
              </Button>
            )}
          </>
        )}
      </Content>
    </>
  );
};

export default Account;
