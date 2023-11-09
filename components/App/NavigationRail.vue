<template>
    <div class=" w-fit top-0 h-full fixed border-r-[0.5px] border-opacity-30  border-r-colorOutlineDark">
        <div class="flex-col h-fit mt-12">
            <h4 class="text-xl font-bold rotate-90 cursor-pointer">Notes</h4>
        </div>
        <div class="flex flex-col  mt-12">

            <div
                v-Ripple
                class="
                        m-auto
                        flex cursor-pointer
                        min-h-[48px] min-w-[48px] 
                        bg-colorPrimaryLight 
                        rounded-full 
                        shadow-sm 
                        opacity-70 hover:opacity-100"
            >

                <Icon
                    class="m-auto pointer-events-none"
                    name="mdi:plus"
                    size="24px"
                />
            </div>
        </div>
        <div class="flex flex-col w-full py-[16px] space-y-4 absolute bottom-0">
            <div
                v-for="n in menuItems"
                v-Ripple
                class="
                        m-auto
                        flex cursor-pointer
                        min-h-[32px] min-w-[32px]  
                        rounded-full 
                        shadow-sm 
                        "
            >
                <Icon
                    class="m-auto pointer-events-none"
                    :name="n.icon"
                    size="24px"
                />
            </div>
        </div>
    </div>
</template>
<script setup>
const menuItems = [
    {
        "name": "Search",
        "icon": "ic:outline-search",
        "path": ""
    },
    {
        "name": "Categories",
        "icon": "ic:outline-label",
        "path": ""
    },
    {
        "name": "Setting",
        "icon": "ic:outline-settings",
        "path": ""
    },
]
</script>