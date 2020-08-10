<template>
    <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">confirmer la  commande</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">adresse</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">moyen de paiment</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        >
        
        


        </v-card>


<v-list-item v-for='(item,key) in  commandList'  :key='key'>
  <v-list-item-content>
    <v-list-item-title>
      {{item.name}}

        
    </v-list-item-title>
    <v-list-item-subtitle>
      quantite {{item.quantity}}
    </v-list-item-subtitle>
  </v-list-item-content>
</v-list-item>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
     
     <div>

       <h2>adresse de livraison</h2>

<v-text-field
     label="adresse"
     v-model="commande.livraison.adresse"
     >
     </v-text-field>

      <v-text-field
     label="ville"
     v-model="commande.livraison.ville"
     >
     </v-text-field>

      <v-text-field
     label="codePostal"
     v-model="commande.livraison.codePostal"
     >
     </v-text-field>

      <v-text-field
     label="pays"
     v-model="commande.livraison.pays"
     >
     </v-text-field>
     </div>
     



<v-switch
v-model='selected'
label="changer la facturation " 
>

</v-switch>


  <div v-if='selected'>

       <h2>adresse de facturation</h2>

<v-text-field
     label="adresse"
     v-model="commande.facturation.adresse"
     >
     </v-text-field>

      <v-text-field
     label="ville"
     v-model="commande.facturation.ville"
     >
     </v-text-field>

      <v-text-field
     label="codePostal"
     v-model="commande.facturation.codePostal"
     >
     </v-text-field>

      <v-text-field
     label="pays"
     v-model="commande.facturation.pays"
     >
     </v-text-field>
     </div>

        <v-btn
          color="primary"
          @click="datasInput"
        >
          Continue
        </v-btn>

        <v-btn text
         @click="e1 = 1">Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
      

       <v-expansion-panels
          v-model="panel"
             multiple
       >
      <v-expansion-panel
      >

        <v-expansion-panel-header disable-icon-rotate>
            Commande
            <template v-slot:actions>
              <v-icon color="teal">mdi-check</v-icon>
            </template>
          </v-expansion-panel-header>

      
        <v-expansion-panel-content>
       

<v-list-item v-for='(item,key) in  commandList'  :key='key'>
  <v-list-item-content>
    <v-list-item-title>
      {{item.name}}

        
    </v-list-item-title>
    <v-list-item-subtitle>
      quantite {{item.quantity}}
    </v-list-item-subtitle>
  </v-list-item-content>
</v-list-item>

         </v-expansion-panel-content>
      </v-expansion-panel>
       <v-expansion-panel
      >
        <v-expansion-panel-header>Paiement</v-expansion-panel-header>
        <v-expansion-panel-content>
          
            <v-stripe-card
    v-model="source"
    :api-key="apiKey"
  ></v-stripe-card>
            </v-expansion-panel-content>
      </v-expansion-panel>
      
    </v-expansion-panels>



        <v-btn
          color="primary"
         @click="process"
        >
          Payer
        </v-btn>

        <v-btn text
         @click="e1 = 2"
        >Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script src='./step.js'>

</script>