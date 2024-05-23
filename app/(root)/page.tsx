import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

export const metadata = {
  title: "Home | KamPay Banking",
  description: "Easy online banking solution for everyone",
};

const Home = () => {
  const dummyBanksAndAccounts = [
    {
      $id: "bank1",
      accountId: "account1",
      bankId: "bankId1",
      accessToken: "token1",
      fundingSourceUrl: "url1",
      userId: "user1",
      sharableId: "share1",
      id: "account1",
      availableBalance: 1000,
      currentBalance: 1600,
      officialName: "Savings Account",
      mask: "****1234",
      institutionId: "inst1",
      name: "Savings",
      type: "savings",
      subtype: "subtype1",
      appwriteItemId: "item1",
    },
    {
      $id: "bank2",
      accountId: "account2",
      bankId: "bankId2",
      accessToken: "token2",
      fundingSourceUrl: "url2",
      userId: "user1",
      sharableId: "share2",
      id: "account2",
      availableBalance: 2000,
      currentBalance: 2500,
      officialName: "Checking Account",
      mask: "****5678",
      institutionId: "inst2",
      name: "Checking",
      type: "checking",
      subtype: "subtype2",
      appwriteItemId: "item2",
    },
  ];

  const loggedIn = {
    $id: "string",
    email: "kamilraza@gmail.com",
    userId: "string",
    dwollaCustomerUrl: "string",
    dwollaCustomerId: "string",
    firstName: "Kamil",
    lastName: "Raza",
    address1: "string",
    city: "string",
    state: "string",
    postalCode: "string",
    dateOfBirth: "string",
    ssn: "string",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={12500.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={dummyBanksAndAccounts}
      />
    </section>
  );
};

export default Home;
