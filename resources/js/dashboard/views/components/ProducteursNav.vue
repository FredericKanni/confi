<template>
  <div>
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-btn color="pink" dark @click.stop="drawer = !drawer">
          <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        </v-btn>
      </v-row>
    </v-container>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            <v-text-field v-model="producteur.name" nom="Nom"></v-text-field>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
       <v-text-field v-model="producteur.user.email" email="Email"></v-text-field>
      </v-list-item>

       <v-list-item>
        <v-btn color="primary" dark    @click.stop="drawer = !drawer">
        valider
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>
    </v-navigation-drawer>
  </div>
</template>

<script src='./ProducteursNav.js'>
</script>