import { Menu } from "@headlessui/react";

function DropDown() {
  return (
    <Menu>
      <Menu.Button>More</Menu.Button>
      <Menu.Items
        style={{ display: "flex", flexDirection: "column", width: 200 }}
      >
        <Menu.Item>
          {({ active }) => (
            <div>
              <Menu>
                <Menu.Button>Nested</Menu.Button>
                <div style={{ position: "absolute", top: 0, left: 200 }}>
                  <Menu.Items
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: 200,
                    }}
                  >
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`${active && "bg-blue-500"}`}
                          href="/nested-link1"
                        >
                          Nested Link1
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`${active && "bg-blue-500"}`}
                          href="/nested-link2"
                        >
                          Nested Link2
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </div>
              </Menu>
            </div>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a className={`${active && "bg-blue-500"}`} href="/link2">
              Link2
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default DropDown;
