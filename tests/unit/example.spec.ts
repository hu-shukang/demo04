import { flushPromises, shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  // it("renders props.msg when passed", () => {
  //   const msg = "new message";
  //   const wrapper = shallowMount(HelloWorld, {
  //     props: { msg },
  //   });
  //   expect(wrapper.text()).toMatch(msg);
  // });

  // it("test", () => {
  //   const msg = "new message";
  //   const wrapper = shallowMount(HelloWorld, {
  //     props: { msg },
  //   });
  //   const test: () => string = wrapper.vm.test;
  //   expect(test()).toEqual('hello world')
  // });

  it("axios", async () => {
    /*
get: async (url: string) => {
        console.log("url: ", url);
        return "hello world";
      }
    */
    const axiosMock = {
      get: jest.fn().mockImplementation(async (url: string) => {
        return Promise.resolve("hello world");
      })
    }
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
      global: {
        provide: {
          'axios': axiosMock
        }
      }
    });
    await flushPromises()
    const data = wrapper.vm.data;
    console.log(data);
   
  });
});
