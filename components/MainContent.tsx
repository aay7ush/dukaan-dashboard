import Card from "./Card"
import CustomButton from "./CustomButton"
import Header from "./Header"
import Transactions from "./Transactions"

const MainContent = () => {
  return (
    <section>
      <Header />

      <div className="flex items-center justify-between p-8 pb-6">
        <h2 className="font-medium text-xl text-clr-primary">Overview</h2>
        <CustomButton title="Last Month" icon="/chevron-down-grey.svg" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-8 pb-8">
        <Card title="Online orders" data="231" />
        <Card title="Amount received" data="₹23,92,313.19" />
      </div>

      <Transactions />
    </section>
  )
}
export default MainContent
