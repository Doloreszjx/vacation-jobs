<template>
  <div class="box">
    <span class="title"><b>关于我们</b></span>
    <p class="introduction">我们一直致力于在中国大地推进智慧牧场的发展
                              <img src="http://image.zzd.sm.cn/16130109288507172989.jpg" class="pic-icon"/>
    </p>
    <hr>
    <div class="f-box">
      <form class="message-form" action="">
         <div class="form">
           <ul>
             <li style="width: 40%"><input class="name" type="text" value="如何称呼您："/> </li>
             <li style="width: 50%;"><input class="number" type="text" value="您的联系电话："/> </li>
             <li style="width: 50%;"><input class="email" type="text" value="您的邮箱："/> </li>
          </ul>
        </div>
        <div class="idea">
            <div class="text">您认为大型牲畜肉类食品安全问题主要存在哪些问题（可多选）</div>
            <label  v-for="item of list" :key="item.id" class="choose">
            <input name="question" type="checkbox" value="" />{{item.content}}
          </label>
        </div>
      </form>
      <div class="icon">
        <el-button type="text" @click="open" class="button">提交</el-button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HomeQuestionnaire',
  methods: {
    open () {
      this.$alert('我们会及时解决您所遇到的问题', '提交成功！', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: $ { action } `
          })
        }
      })
    }
  },
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .box
    position : relative
    overflow : hidden
    height:0
    padding-bottom :50%
    background :#fff
    margin-top : 2.86rem
    .title
      font-size : .6rem
      margin-top : .6rem
    .introduction
      font-size : .4rem
      margin-top : .4rem
      .pic-icon
        height : 3rem
        width :4rem
        padding-left : .5rem
    .f-box
      overflow : hidden
      height:0
      padding-bottom :34%
      margin-top : 1.5rem
      .form
        float :left
        width: 25%
        font-size :.35rem
        padding-left:4.6rem
      li
        padding : .6rem
    .idea
      padding-top : .8rem
      .text
        padding-bottom :1.6rem
        font-size : .35rem
      .choose
        padding-left :.2rem
        font-size : .3rem
  .icon
    padding-top: 2rem
    padding-left : 12.8rem
    .button
      width: 3.7rem
      height :.8rem
      border-width :0rem
      border-radius :.03rem
      background : #1E90FF
      cursor: pointer
      outline : none
      font-family : "Microsoft YaHei UI"
      color: white
      font-size : .3rem
    .button:hover
      background :#5599FF
</style>
