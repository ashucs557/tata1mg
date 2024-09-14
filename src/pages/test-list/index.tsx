import TestListTable from "@components/Common/CustomDataTable";
import Dropdownlist from "@components/Common/Dropdown/dropdownlist";
import RecentlyButton from "@components/Common/RecentlyButton/recentlybutton";
import IMAGE from "@const/Image";
import MetaRepo from "@store/Services/MetaService";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import SVGIcon from "@const/SvgIcon";


function TestList({ metaDetail }: InferGetStaticPropsType<typeof getStaticProps>) {
  // const [filter, setFilter] = useState({ TestCode: "z001" });
  // const { isLoading: overviewLoading } = useQuery("getOverview", () => LeadRepo.getOverview(filter));
  return (
    <>
      <NextSeo
        title={metaDetail?.SeoTitle}
        description={metaDetail?.SeoDescription}
        canonical={``}
      />
      <div className="container mt-24 list-feature-drop">
        <div className="md:block hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-1 gap-5 ">
            <div className="">
              <Dropdownlist title="Department" />
            </div>
            <div className="">
              <Dropdownlist title="Diseases" />
            </div>
            <div className="">
              <Dropdownlist title="Speciality" />
            </div>
            <div className="">
              <Dropdownlist title="Method" />
            </div>
          </div>
        </div>
        <div className="md:hidden block">
          <Menu>
            <div className="relative">
              <MenuButton className="relative locat-drop">
                {/* <div className="absolute start-2 top-2">
                    {!!icon && <span className="">{icon}</span>}
                  </div> */}
                All Category
                <div className="drop-arrow absolute end-2 bottom-4 cursor-pointer">
                  <SVGIcon.Drop_Down_Icon />
                </div>
              </MenuButton>

              <MenuItems
                transition
                className="drop-box absolute transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
              >
                <MenuItem>
                  <button className="flex w-full items-center text-black gap-2 rounded-lg py-1.5  data-[focus]:bg-white/10">
                    <div className="w-full">
                      <Dropdownlist title="Department" />
                    </div>
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="group flex w-full items-center text-black gap-2 rounded-lg py-1.5 data-[focus]:bg-white/10">
                    <div className="w-full">
                      <Dropdownlist title="Diseases" />
                    </div>
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="group flex w-full items-center text-black gap-2 rounded-lg py-1.5 data-[focus]:bg-white/10">
                    <div className="w-full">
                      <Dropdownlist title="Speciality" />
                    </div>
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="group flex w-full items-center text-black gap-2 rounded-lg py-1.5 data-[focus]:bg-white/10">
                    <div className="w-full">
                      <Dropdownlist title="Method" />
                    </div>
                  </button>
                </MenuItem>
              </MenuItems>
            </div>
          </Menu>
        </div>
        <div className="table-sect relative">
          <div className="t-search-result">
            <div>
              <h2>Search Results (A)</h2>
            </div>
            <div className="flex items-center ">
             
              <div className="t-dwnld-file">
                <RecentlyButton title="Download" icon={<Image src={IMAGE.PDFIcon} alt="pdf-icon" className="pfd-icon" />} />
              </div>
            </div>
          </div>
          <div className="md:mt-5 mt-3">
            <TestListTable />
          </div>
        </div>
      </div>
    </>
  )
}
export default TestList;
export const getStaticProps: GetStaticProps = async (context: any) => {
  const res: any = await MetaRepo.getMeta("test-list");
  const metaData = res?.Data;
  return (
    { props: { metaDetail: metaData || [] }, revalidate: 10, }
  )
}
