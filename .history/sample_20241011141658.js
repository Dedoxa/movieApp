const { createRoot } = ReactDOM;

const {  Tabs  } = antd;
const App = () => (
  <Tabs
    defaultActiveKey="1"
    centered
    items={new Array(3).fill(null).map((_, i) => {
      const id = String(i + 1);
      return {
        label: `Tab ${id}`,
        key: id,
        children: `Content of Tab Pane ${id}`,
      };
    })}
  />
);
const ComponentDemo = App;


createRoot(mountNode).render(<ComponentDemo />);