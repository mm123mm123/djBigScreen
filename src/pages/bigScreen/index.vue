<template>
  <div id="root">
    <div class="header" :style="'background-image:'+'url('+headerUrl+')'">
      <div class="title">晋控煤业四台矿智慧党建平台</div>
      <div class="buttonArray">
        <span>
            <router-link v-for="(button,index) in buttonArray" :key="index" :to=button.path>
                      {{ button.buttonText }}
            </router-link>
        </span>
      </div>
    </div>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import header from '../../assets/images/1058header.png'

export default {
  name: 'bigScreen',
  data() {
    return {
      headerUrl: header,
      buttonArray: [{path: '/grassrootsPartyBuilding', buttonText: '基层党建'},
        {path: '/cadreStyle', buttonText: '干部风采'},
        {path: '/themeEducation', buttonText: '主题教育'},
        {path: '/collectiveEconomy', buttonText: '集体经济'},
        {path: '/serviceManagement', buttonText: '服务管理'}]
    }
  },
  mounted() {
    const clientWidth = document.documentElement.clientWidth
    const clientHeight = document.documentElement.clientHeight
    const pageWidth = clientWidth / clientHeight > 16 / 9 ? clientHeight * 16 / 9 : clientWidth
    const pageHeight = pageWidth / (16 / 9)
    document.getElementsByTagName('html')[0].style['font-size'] = pageWidth / 100 + 'px'
    const root = document.querySelector('#root')
    root.style.width = pageWidth + 'px'
    root.style.height = pageHeight + 'px'
    root.style.marginTop = (clientHeight - pageHeight) / 2 + 'px'
    console.log(header)
  }
}
</script>
<style lang="scss" scoped>
@import "./src/helper";

#root {
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  .header {
    height: px(99);
    background-size: cover;
    color: #ffd348;
    font-size: px(24);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    .title {
      margin-top: px(10);
      margin-bottom: px(16);
    }

    .buttonArray {
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        a {
          padding: px(10) px(15);
          background: lighten(#a91215, 2%);
          color: #e1a368;
          border-radius: px(3);
          font-size: px(12);
          font-weight: 800;

          &:hover {
            background: linear-gradient(0deg,lighten(#8f1c1b, 10%), #8f1c1b)
          }

          &.router-link-active {
            background: linear-gradient(0deg, lighten(#8f1c1b, 1%), lighten(#8f1c1b, 10%), #8f1c1b)
          }
        }

        a + a {
          margin-left: px(18);
        }
      }
    }

  }

  main {
    flex-grow: 1;
    background: #94201c;


  }
}
</style>
