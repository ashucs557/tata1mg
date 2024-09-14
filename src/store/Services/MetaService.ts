import EndPoint from "@config/EndPoint";
import { Api } from "./Agent";

const MetaRepo = {
    getMeta:async (slug:any) => {
        try {
            const {data} = await Api.get(EndPoint.TEST_OVERVIEW , {params: {slug}});
            return data
        } catch (err:any) {
            // console.log(err);
        }
    }
}
export default MetaRepo