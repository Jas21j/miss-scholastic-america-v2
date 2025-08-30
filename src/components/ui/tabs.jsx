import React, { useState } from 'react';

// A simplified tabs component without external dependencies
const Tabs = ({ defaultValue, className, children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  
  // Filter children to get TabsTrigger and TabsContent
  const triggers = React.Children.toArray(children).filter(
    child => child.type === TabsTrigger
  );
  
  const contents = React.Children.toArray(children).filter(
    child => child.type === TabsContent
  );
  
  return (
    <div className={className}>
      <div className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-600">
        {triggers.map(trigger => 
          React.cloneElement(trigger, {
            key: trigger.props.value,
            isActive: trigger.props.value === activeTab,
            onClick: () => setActiveTab(trigger.props.value)
          })
        )}
      </div>
      <div className="mt-2">
        {contents.map(content => 
          content.props.value === activeTab 
            ? React.cloneElement(content, { key: content.props.value }) 
            : null
        )}
      </div>
    </div>
  );
};

const TabsList = ({ children }) => {
  return <>{children}</>;
};

const TabsTrigger = ({ value, isActive, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus:outline-none ${
        isActive 
          ? 'bg-white text-gray-900 shadow-sm' 
          : 'text-gray-600 hover:text-gray-900'
      }`}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ value, children }) => {
  return <div>{children}</div>;
};

export { Tabs, TabsList, TabsTrigger, TabsContent }; 