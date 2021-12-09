import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
    models: {
        transactions: Model
    },

    seeds(server){
        server.db.loadData({
            transactions: [
                {
                    id: '1',
                    title: 'Compra no mercadinho',
                    value: 150,
                    type: 'withdraw',
                    createAt: new Date()
                },
                {
                    id: '2',
                    title: 'Site feito para +Papel',
                    value: 1200,
                    type: 'deposit',
                    createAt: new Date()
                }
            ]
        })
    },

    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
            return this.schema.all('transactions');
        })

        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody)
            return schema.create(data);
        })
    }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);