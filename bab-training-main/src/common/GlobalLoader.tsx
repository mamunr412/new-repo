import { Spin } from "antd";

export default function GlobalLoader() {
  return (
    <div className='g_loading'>
      <div className='spinner-container'>
        <Spin size='large' />
      </div>
    </div>
  );
}
