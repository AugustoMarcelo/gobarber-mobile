import React from 'react';
import { useSelector } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

export default function Routes() {
  const { signed, loading } = useSelector((state) => state.auth);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
