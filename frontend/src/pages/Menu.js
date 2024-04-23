const Vegetables = [
  {
    name: "Paneer Kulchan",
    price: "₹250",
  },
  {
    name: "Paneer Lababdar",
    price: "₹210",
  },
  {
    name: "Paneer Tikka Masala",
    price: "₹190",
  },
  {
    name: "Paneer Cheese Masala",
    price: "₹210",
  },
  {
    name: "Panner Butter Masala",
    price: "₹250",
  },
];

const Indian_Breads = [
  {
    name: "Tawa Roti",
    price: "₹30",
  },
  {
    name: "Tandoori Roti",
    price: "₹40",
  },
  {
    name: "Garlic Naan",
    price: "₹90",
  },
  {
    name: "Bhakri",
    price: "₹30",
  },
];

const dessert = [
  {
    name: "Gulab Jamun",
    price: "₹25",
  },
  {
    name: "Rasgulla",
    price: "₹31",
  },
  {
    name: "Pasteries",
    price: "₹55",
  },

];

export default function Example() {
  return (
    <div className="py-16 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Our Menu
          </h2>
          <p className="mt-2 text-lg leading-8">All items at one places.</p>
        </div>
        <div className="mx-auto mt-10 sm:mt-18 rounded-md bg-[#495e57] text-white shadow-xl p-6">
          <div className="mx-auto mt-12 sm:mt-8">
            <h3 className="text-4xl text-center text-[#f4ce14] font-bold tracking-tight sm:text-4x1">
              Main Course
            </h3>
          </div>
          <div className="mt-6 sm:text-center">
            <dl>
              {Vegetables.map((item) => (
                <div className="px-4 py-4 sm:grid shadow-xl sm:grid-cols-3 text-lg font-medium leading-5 sm:gap-4 sm:px-0">
                  <dt>{item.name}</dt>
                  <dd className="mt-1 sm:col-span-2 sm:mt-0">{item.price}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mx-auto mt-10 sm:mt-8">
            <h3 className="text-4xl text-center text-[#f4ce14] font-bold tracking-tight sm:text-4xl">
              Indian Breads
            </h3>
          </div>
          <div className="mt-6 sm:text-center">
            <dl>
              {Indian_Breads.map((item) => (
                <div className="px-4 py-4 sm:grid shadow-xl sm:grid-cols-3 text-lg font-medium leading-5 sm:gap-4 sm:px-0">
                  <dt>{item.name}</dt>
                  <dd className="mt-1 sm:col-span-2 sm:mt-0">{item.price}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mx-auto mt-12 sm:mt-8">
            <h3 className="text-3xl text-center text-[#f4ce14] font-bold tracking-tight sm:text-4xl">
              Dessert
            </h3>
          </div>
          <div className="mt-6 sm:text-center">
            <dl>
              {dessert.map((item) => (
                <div className="px-4 py-6 sm:grid shadow-xl sm:grid-cols-3 text-lg font-medium leading-6 sm:gap-4 sm:px-0">
                  <dt>{item.name}</dt>
                  <dd className="mt-1 sm:col-span-2 sm:mt-0">{item.price}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
