import React from 'react';
import { Search } from 'lucide-react';
import Nav from '../../components/ui/MainNav';

const Orders = () => {
  const orders = [
    {
      id: '657855772eb6b44a5f1d07e3',
      event: 'GitHub Universe 2023',
      buyer: 'Sujata | JS Mastery',
      created: 'Tue, Dec 12, 12:43 PM',
      amount: '$100.00'
    },
    {
      id: '6579515caa00afce8d5469fe',
      event: 'GitHub Universe 2023',
      buyer: 'Faizan | JS Mastery',
      created: 'Wed, Dec 13, 6:38 AM',
      amount: '$100.00'
    },
    {
      id: '65797a653d1bb5518c3fef47',
      event: 'GitHub Universe 2023',
      buyer: 'Adrian | JS Mastery',
      created: 'Wed, Dec 13, 9:33 AM',
      amount: '$100.00'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-100 p-4 md:p-8">
      <div className="">
        <Nav />
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8">Orders</h1>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search buyer name..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-300"
        />
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3 md:p-4 text-xs md:text-sm font-medium text-gray-600">Order ID</th>
              <th className="text-left p-3 md:p-4 text-xs md:text-sm font-medium text-gray-600">Event Title</th>
              <th className="text-left p-3 md:p-4 text-xs md:text-sm font-medium text-gray-600">Buyer</th>
              <th className="text-left p-3 md:p-4 text-xs md:text-sm font-medium text-gray-600 hidden sm:table-cell">Created</th>
              <th className="text-right p-3 md:p-4 text-xs md:text-sm font-medium text-gray-600">Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="p-3 md:p-4 text-xs md:text-sm text-blue-600 truncate max-w-[120px] md:max-w-none">
                  {order.id}
                </td>
                <td className="p-3 md:p-4 text-xs md:text-sm text-black">{order.event}</td>
                <td className="p-3 md:p-4 text-xs md:text-sm text-black">{order.buyer}</td>
                <td className="p-3 md:p-4 text-xs md:text-sm text-gray-600 hidden sm:table-cell">{order.created}</td>
                <td className="p-3 md:p-4 text-xs md:text-sm text-black text-right">{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;