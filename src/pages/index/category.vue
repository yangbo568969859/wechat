<template>
  <div class="category">
		<ul class="c-product-list">
			<li v-for="item in items" class="c-product-list__item" :key="item.item_id">
				<router-link :to="{name: 'item', params: {id: item.item_id}}" class="c-product-list-item__img">
					<img  height="120" width="120" class="c-product-list-item__sold-out" v-if="item.quantity===0">
				</router-link>
				<div class="c-product-list-item__info">
					<div class="c-product-list-item__price-box">
						<router-link :to="{name: 'item', params: {id: item.item_id}}" class="c-product-list-item__title">
						{{item.title}}
						</router-link>
						<div class="c-product-list-item__price-info">
							<div class="c-product-list-item__price">
								￥{{item.price}}
							</div>
							<div class="c-product-list-item__retail-price">市场价:￥{{item.retail_price}}</div>
							<div class="c-product-list-item__profit">
								赚￥{{item.total_distribution_commission}}
							</div>
						</div>
					</div>
					<div class="c-product-list-item__other">
						<div class="c-product-list-item__inventory">
							<span class="c-product-list-item__type">{{item.trade_model|enumValue}}</span>
							<span v-if="item.quantity>0">仅剩 {{item.quantity}} 件</span>
							<span v-else-if="item.is_apply_replenish">求补货 {{item.replenish_quantity}}</span>
							<div v-else @click="replenish(item.item_id)">
								<icon symbol="inventory" :baseline="true" class="icon_inventory"></icon>求补货</div>
						</div>
						<div class="c-product-list-item__operate">
							<c-putaway :id="item.item_id" type="item" v-model="item.is_distribution_favorite" :isOff="item.isOff" @soldout="soldout" class="putaway"></c-putaway>
							<icon symbol="material" class="material" @click.native="material(item)"></icon>
							<icon symbol="share" class="share" @click.native="share(item)"></icon>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				items: [
					{

					}
				]
			}
		}
	}
</script>

<style lang="scss">
.c-product-list-item {
  display: flex;
  padding: 30px 40px 30px 20px;
  background: #fff;

  &__sold-out{
    position:absolute;
    top:50%;
    left:50%;
    margin:-60px 0 0 -60px;
    width:120px;
    height:120px;
  }

  &__img {
    position:relative;
    display: block;
    margin-right: 20px;
  }

  &__info {
    flex: 1;
    position: relative;
  }

  &__price-box{
    height:160px;
  }

  &__title {
    display: block;
    margin: 6px 0 20px;
    color: #000;
    height:64px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    line-height: 32px;
    font-size: 24px;
    font-weight: 700;
  }

  &__price-info {
    display: flex;
    line-height: 1em;
    font-size: 24px;
  }

  &__price {
    color: #000;
    font-weight: 700;
  }

  &__retail-price {
    margin-left: 14px;
    color: #999;
    font-size: 20px;
    text-decoration: line-through;
  }

  &__profit {
    flex: 1;
    text-align: right;
    color: red;
    font-weight: 700;
  }

  &__other {
    display: flex;
    width: 100%;
    height: 32px;
    color: #999;
    font-size: 24px;
  }

  &__inventory {
    display: flex;
    height: 100%;
    color: #999;
    line-height: 34px;
    font-size: 24px;

    .icon_inventory {
      margin-right: 14px;
      font-size: 28px;
      fill: #999;
    }
  }

  &__type{
    margin-right:12px;
    padding:0 4px;
    height: 28px;
    line-height: 28px;
    overflow: hidden;
    text-align: center;
    font-size: 20px;
    color: #666;
    background: #fff;
    border: 1px solid #999;
    border-radius: 5px;
    /*no*/
  }

  &__operate {
    flex: 1;
    height: 100%;
    text-align: right;
    font-size: 32px;
    fill: #666;

    .svg-icon{
      vertical-align: baseline;
    }

    .putaway,
    .material {
      margin-right: 50px;
    }
  }
}
</style>
