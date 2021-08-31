import { flushPromises, shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

jest.mock('vue-router')

describe("Home.vue", () => {

  it("axios", () => {
    const routerPushMock = jest.fn().mockImplementation((path: string) => {
      expect(path).toEqual('/about')
    });
    require('vue-router').useRouter.mockReturnValueOnce({
      push: routerPushMock
    })

    const wrapper = shallowMount(Home);
    const click: () => void = wrapper.vm.click;
    click();
  });
});
