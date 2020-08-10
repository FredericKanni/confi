<template>
    <div>

<ProducteursNav></ProducteursNav>


       <v-data-table :headers="headers" :items="producteurs" class="elevation-1" :items-per-page="20">


<template v-slot:item.email="{ item }">
      {{item.user.email}}
      </template>



 <template v-slot:item.actions="{ item }">

<ProducteursNav :producteur="item"  ></ProducteursNav>

        
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>

    
    </v-data-table>
    </div>
</template>

<script src='./listeProducteurs.js'>

</script>