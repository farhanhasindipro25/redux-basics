import {
  decrement,
  increment,
  incrementByAmount,
} from "../../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

export default function Counter() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="min-h-screen flex items-center gap-2 flex-col justify-center bg-slate-900">
      <div className="flex gap-2 items-center justify-center">
        <button
          className="px-4 py-3 rounded-md border border-gray-500 bg-red-100 text-red-700 font-semibold"
          onClick={() => dispatch(decrement())}
        >
          Decrement (-)
        </button>
        <div className="p-3 bg-white rounded-md">{count}</div>
        <button
          className="px-4 py-3 rounded-md border border-gray-500 bg-green-100 text-green-700 font-semibold"
          onClick={() => dispatch(increment())}
        >
          Increment (+)
        </button>
      </div>
      <button
        className="px-20 py-3 rounded-md border border-gray-500 bg-green-100 text-green-700 font-semibold"
        onClick={() => dispatch(incrementByAmount(10))}
      >
        Increment By Amount
      </button>
    </div>
  );
}
