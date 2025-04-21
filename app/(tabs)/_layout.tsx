import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';


import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import TabBar from '@/components/user/TabBar';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const screenNames: { name: string; options?: { title?: string, headerShown?: boolean } }[] = [
    {
      name: "index",
      options: {
        title: "Home",
        headerShown: false
      },
    },
    {
      name: "properties",
      options: {
        title: "Properties",
        headerShown: false,
      }
    },
    {
      name: "map",
      options: {
        title: "Map",
        headerShown: false
      }
    },
    {
      name: "inbox",
      options: {
        title: "Inbox",
        headerShown: false
      }
    },
    {
      name: "account",
      options: {
        title: "Account",
        headerShown: false
      }
    }
  ];

  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      {screenNames.map(({ name, options }) => (
        <Tabs.Screen key={name} name={name} options={options} />
      ))}
    </Tabs>
  );
}

